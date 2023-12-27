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


// Description of Mimosa hebecarpa
const Mimosa_hebecarpa = new Mimosa()
Mimosa_hebecarpa.specificEpithet = 'hebecarpa'

Mimosa_hebecarpa.stems = new Stems()

Mimosa_hebecarpa.stipule = new Stipule()
Mimosa_hebecarpa.stipule.margin = new MarginStipule()
Mimosa_hebecarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_hebecarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_hebecarpa.leaf = new Leaf()
Mimosa_hebecarpa.leaf.petiole = new Petiole()
Mimosa_hebecarpa.leaf.bipinnate = new Bipinnate()
Mimosa_hebecarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_hebecarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hebecarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(8)
Mimosa_hebecarpa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(11, 23)
Mimosa_hebecarpa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(25)
Mimosa_hebecarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hebecarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hebecarpa.inflorescence = new Inflorescence()
Mimosa_hebecarpa.inflorescence.peduncle = new Peduncle()
Mimosa_hebecarpa.inflorescence.spicate = new Spicate()

Mimosa_hebecarpa.flower = new Flower()
Mimosa_hebecarpa.flower.bracteole = new Bracteole()
Mimosa_hebecarpa.flower.merism = '4-merous'
Mimosa_hebecarpa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hebecarpa.flower.calyx = new Calyx()
Mimosa_hebecarpa.flower.corolla = new Corolla()
Mimosa_hebecarpa.flower.corolla.shape = 'turbinate'

Mimosa_hebecarpa.androecium = new Androecium()
Mimosa_hebecarpa.androecium.filaments = new Filaments()
Mimosa_hebecarpa.androecium.filaments.colour = 'pinkish'

Mimosa_hebecarpa.ginoecium = new Ginoecium()
Mimosa_hebecarpa.ginoecium.ovary = new Ovary()

Mimosa_hebecarpa.fruit = new Fruit()
Mimosa_hebecarpa.fruit.stipe = new Stipe()
Mimosa_hebecarpa.fruit.replum = new Replum()
Mimosa_hebecarpa.fruit.epicarp = new Epicarp()

Mimosa_hebecarpa.seed = new Seed()


// Description authorship
Mimosa_hebecarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hebecarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hebecarpa
export { Mimosa_hebecarpa }