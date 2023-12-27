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


// Description of Mimosa puberula
const Mimosa_puberula = new Mimosa()
Mimosa_puberula.specificEpithet = 'puberula'

Mimosa_puberula.stems = new Stems()

Mimosa_puberula.stipule = new Stipule()
Mimosa_puberula.stipule.margin = new MarginStipule()
Mimosa_puberula.stipule.adaxial = new AdaxialStipule()
Mimosa_puberula.stipule.abaxial = new AbaxialStipule()

Mimosa_puberula.leaf = new Leaf()
Mimosa_puberula.leaf.petiole = new Petiole()
Mimosa_puberula.leaf.bipinnate = new Bipinnate()
Mimosa_puberula.leaf.bipinnate.rachis = new Rachis()
Mimosa_puberula.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_puberula.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_puberula.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_puberula.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 31)
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(36)
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_puberula.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_puberula.inflorescence = new Inflorescence()
Mimosa_puberula.inflorescence.peduncle = new Peduncle()
Mimosa_puberula.inflorescence.spicate = new Spicate()

Mimosa_puberula.flower = new Flower()
Mimosa_puberula.flower.bracteole = new Bracteole()
Mimosa_puberula.flower.merism = ['4-merous', '5-merous']
Mimosa_puberula.flower.calyx = new Calyx()
Mimosa_puberula.flower.calyx.shape = 'campanulate'
Mimosa_puberula.flower.corolla = new Corolla()
Mimosa_puberula.flower.corolla.shape = 'turbinate'

Mimosa_puberula.androecium = new Androecium()
Mimosa_puberula.androecium.filaments = new Filaments()

Mimosa_puberula.ginoecium = new Ginoecium()
Mimosa_puberula.ginoecium.ovary = new Ovary()

Mimosa_puberula.fruit = new Fruit()
Mimosa_puberula.fruit.stipe = new Stipe()
Mimosa_puberula.fruit.replum = new Replum()
Mimosa_puberula.fruit.epicarp = new Epicarp()

Mimosa_puberula.seed = new Seed()


// Description authorship
Mimosa_puberula.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_puberula.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa puberula
export { Mimosa_puberula }