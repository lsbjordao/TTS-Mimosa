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


// Description of Mimosa tenuiflora
const Mimosa_tenuiflora = new Mimosa()
Mimosa_tenuiflora.specificEpithet = 'tenuiflora'

Mimosa_tenuiflora.stems = new Stems()

Mimosa_tenuiflora.stipule = new Stipule()
Mimosa_tenuiflora.stipule.margin = new MarginStipule()
Mimosa_tenuiflora.stipule.adaxial = new AdaxialStipule()
Mimosa_tenuiflora.stipule.abaxial = new AbaxialStipule()

Mimosa_tenuiflora.leaf = new Leaf()
Mimosa_tenuiflora.leaf.petiole = new Petiole()
Mimosa_tenuiflora.leaf.bipinnate = new Bipinnate()
Mimosa_tenuiflora.leaf.bipinnate.rachis = new Rachis()
Mimosa_tenuiflora.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tenuiflora.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 11)
Mimosa_tenuiflora.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(38, 55)
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(60)
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tenuiflora.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tenuiflora.inflorescence = new Inflorescence()
Mimosa_tenuiflora.inflorescence.peduncle = new Peduncle()
Mimosa_tenuiflora.inflorescence.spicate = new Spicate()

Mimosa_tenuiflora.flower = new Flower()
Mimosa_tenuiflora.flower.bracteole = new Bracteole()
Mimosa_tenuiflora.flower.merism = '4-merous'
Mimosa_tenuiflora.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_tenuiflora.flower.calyx = new Calyx()
Mimosa_tenuiflora.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_tenuiflora.flower.corolla = new Corolla()
Mimosa_tenuiflora.flower.corolla.shape = 'turbinate'

Mimosa_tenuiflora.androecium = new Androecium()
Mimosa_tenuiflora.androecium.filaments = new Filaments()
Mimosa_tenuiflora.androecium.filaments.colour = 'whitenish'

Mimosa_tenuiflora.ginoecium = new Ginoecium()
Mimosa_tenuiflora.ginoecium.ovary = new Ovary()

Mimosa_tenuiflora.fruit = new Fruit()
Mimosa_tenuiflora.fruit.stipe = new Stipe()
Mimosa_tenuiflora.fruit.replum = new Replum()
Mimosa_tenuiflora.fruit.epicarp = new Epicarp()

Mimosa_tenuiflora.seed = new Seed()


// Description authorship
Mimosa_tenuiflora.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tenuiflora.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tenuiflora
export { Mimosa_tenuiflora }