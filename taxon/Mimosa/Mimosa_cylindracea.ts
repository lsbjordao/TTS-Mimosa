// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa cylindracea
const Mimosa_cylindracea = new Mimosa()
Mimosa_cylindracea.specificEpithet = 'cylindracea'

Mimosa_cylindracea.stems = new Stems()

Mimosa_cylindracea.stipule = new Stipule()
Mimosa_cylindracea.stipule.margin = new MarginStipule()
Mimosa_cylindracea.stipule.adaxial = new AdaxialStipule()
Mimosa_cylindracea.stipule.abaxial = new AbaxialStipule()

Mimosa_cylindracea.leaf = new Leaf()
Mimosa_cylindracea.leaf.petiole = new Petiole()
Mimosa_cylindracea.leaf.bipinnate = new Bipinnate()
Mimosa_cylindracea.leaf.bipinnate.rachis = new Rachis()
Mimosa_cylindracea.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cylindracea.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cylindracea.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 6)
Mimosa_cylindracea.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(9)
Mimosa_cylindracea.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cylindracea.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cylindracea.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cylindracea.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cylindracea.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cylindracea.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cylindracea.inflorescence = new Inflorescence()
Mimosa_cylindracea.inflorescence.peduncle = new Peduncle()
Mimosa_cylindracea.inflorescence.spicate = new Spicate()

Mimosa_cylindracea.flower = new Flower()
Mimosa_cylindracea.flower.bracteole = new Bracteole()
Mimosa_cylindracea.flower.merism = '4-merous'
Mimosa_cylindracea.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_cylindracea.flower.calyx = new Calyx()
Mimosa_cylindracea.flower.calyx.shape = 'campanulate'
Mimosa_cylindracea.flower.corolla = new Corolla()
Mimosa_cylindracea.flower.corolla.shape = 'obovoid'

Mimosa_cylindracea.androecium = new Androecium()
Mimosa_cylindracea.androecium.filaments = new Filaments()
Mimosa_cylindracea.androecium.filaments.colour = 'yellowish'

Mimosa_cylindracea.ginoecium = new Ginoecium()
Mimosa_cylindracea.ginoecium.ovary = new Ovary()

Mimosa_cylindracea.fruit = new Fruit()
Mimosa_cylindracea.fruit.stipe = new Stipe()
Mimosa_cylindracea.fruit.replum = new Replum()
Mimosa_cylindracea.fruit.epicarp = new Epicarp()

Mimosa_cylindracea.seed = new Seed()


// Description authorship
Mimosa_cylindracea.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cylindracea.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cylindracea
export { Mimosa_cylindracea }