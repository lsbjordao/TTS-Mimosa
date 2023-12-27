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


// Description of Mimosa verrucosa
const Mimosa_verrucosa = new Mimosa()
Mimosa_verrucosa.specificEpithet = 'verrucosa'

Mimosa_verrucosa.stems = new Stems()

Mimosa_verrucosa.stipule = new Stipule()
Mimosa_verrucosa.stipule.margin = new MarginStipule()
Mimosa_verrucosa.stipule.adaxial = new AdaxialStipule()
Mimosa_verrucosa.stipule.abaxial = new AbaxialStipule()

Mimosa_verrucosa.leaf = new Leaf()
Mimosa_verrucosa.leaf.petiole = new Petiole()
Mimosa_verrucosa.leaf.bipinnate = new Bipinnate()
Mimosa_verrucosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_verrucosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_verrucosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_verrucosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 9)
Mimosa_verrucosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(10)
Mimosa_verrucosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_verrucosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_verrucosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_verrucosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 15)
Mimosa_verrucosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_verrucosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_verrucosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_verrucosa.inflorescence = new Inflorescence()
Mimosa_verrucosa.inflorescence.peduncle = new Peduncle()
Mimosa_verrucosa.inflorescence.spicate = new Spicate()

Mimosa_verrucosa.flower = new Flower()
Mimosa_verrucosa.flower.bracteole = new Bracteole()
Mimosa_verrucosa.flower.merism = '4-merous'
Mimosa_verrucosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_verrucosa.flower.calyx = new Calyx()
Mimosa_verrucosa.flower.calyx.shape = 'campanulate'
Mimosa_verrucosa.flower.corolla = new Corolla()

Mimosa_verrucosa.androecium = new Androecium()
Mimosa_verrucosa.androecium.filaments = new Filaments()
Mimosa_verrucosa.androecium.filaments.colour = 'pinkish'

Mimosa_verrucosa.ginoecium = new Ginoecium()
Mimosa_verrucosa.ginoecium.ovary = new Ovary()

Mimosa_verrucosa.fruit = new Fruit()
Mimosa_verrucosa.fruit.stipe = new Stipe()
Mimosa_verrucosa.fruit.replum = new Replum()
Mimosa_verrucosa.fruit.epicarp = new Epicarp()

Mimosa_verrucosa.seed = new Seed()


// Description authorship
Mimosa_verrucosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_verrucosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa verrucosa
export { Mimosa_verrucosa }